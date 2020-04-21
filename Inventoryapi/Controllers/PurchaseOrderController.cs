using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Inventoryapi.Models;
using Inventoryapi.Services;
using InventoryApi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyStore.Models;
using Stripe.Checkout;

namespace Inventoryapi.Controllers {
  [ApiController]
  [Route ("[controller]")]
  public class PurchaseOrderController {
    readonly DataService _service;
    readonly StripeHelperService _stripe;
    public PurchaseOrderController (DataService dataService, StripeHelperService stripeHelper) {
      _service = dataService;
      _stripe = stripeHelper;
    }

    [HttpGet]
    public IEnumerable<PurchaseOrder> GetPurchaseOrders () {
      return _service.GetPurchaseOrders ();

    }
    // [HttpGet("{id}")]
    // public PurchaseOrder GetPurchaseOrderById(int id)
    // {
    //   return _service.GetPurchaseOrderById(id);
    // }
    // [HttpPost("{id}")]
    // public bool SavePurchaseOrder(int id, PurchaseOrder order)
    // {
    //   return _service.SavePurchaseOrder(order);
    // }
    [HttpPost ("newSession")]
    public async Task<Session> CreateSessionAsync ([FromBody]
      PurchaseOrderItem[] request) {
        return await _stripe.InitSessionAsync(request);
      }
  }
}