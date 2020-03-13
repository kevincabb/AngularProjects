using Microsoft.AspNetCore.Mvc;

using MyStore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using InventoryApi.Services;
using Inventoryapi.Services;

namespace InventoryApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InventoryController : ControllerBase
    {
        readonly InventoryServices _fixedService;
        readonly InventoryLiteDbService _service;
        readonly DataService _context;
        public InventoryController(InventoryServices fixedService, InventoryLiteDbService service, DataService context)
        {
            _fixedService = fixedService;
            _service = service;
            _context = context;
        }
        [HttpGet]
        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            // return _fixedService.fixedData;
            return _service.getInventoryItems();
        }

        [HttpGet("populate")]
        public int PopulateData(){
            var fixedData = _fixedService.fixedData;
            return _service.PopulateData(fixedData);
        }

        [HttpGet("{id}")]
        public InventoryItem GetInventoryItem(int id)
        {
            // return _fixedService.fixedData.AsEnumerable().First( x => x.Id == id);
            return _service.GetInventoryItemById(id);
        }

        [HttpPost]
        public int AddInventoryItem(InventoryItem item ){
            // return _fixedService.Insert(item);
            return _service.Insert(item);
        }

        [HttpDelete("{id}")]
        public bool DeleteInventoryItem(int id){
            // return _fixedService.Delete(id);
            return _service.Delete(id);
        }

        [HttpPost("update/{id}")]
        public InventoryItem Update(InventoryItem item){
            return _fixedService.Update(item);
        }

        [HttpGet("findBelowPrice/{price}")]
        public IEnumerable<InventoryItem>findBelowPrice(double price){
            // return _fixedService.GetItemsLessThan(price);
            return _service.GetItemsLessThan(price);
        }

        [HttpPost("update/name")]
        public bool UpdateName(ChangeNameRequest request){
            return _service.UpdateName(request);
        }

        [HttpGet("orders")]
        public IEnumerable<PurchaseOrder>
        GetPurchaseOrders(){
            return _context.GetPurchaseOrders();
        }
    }
}



