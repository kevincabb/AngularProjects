using System.Collections.Generic;
using System.Linq;
using Inventoryapi.Models;
using MyStore.Models;
using Stripe.Checkout;

namespace Inventoryapi.Services {
    public class StripeHelperService {
        readonly SessionService sessions;
        readonly DataService _dataService;
        public StripeHelperService (DataService dataService, SessionService sessionService) {
            sessions = sessionService;
            _dataService = dataService;
        }

        public async System.Threading.Tasks.Task<Session> InitSessionAsync (PurchaseOrderItem[] items) {
            #region init ItemList

            
            // purchaseOrderitem has InventoryItemId
            // InventoryItems has Id
            var itemList = items.Join (
                // what are we joining with
                // property of first group
                // property of second group
                // result
                _dataService.GetInventoryItems (),
                x => x.InventoryItemId,
                y => y.Id,
                (x, y) => new PurchaseOrderRequest{
                    Id = y.Id,
                        Quantity = x.Quantity,
                        Name = y.Name,
                        Price = y.Price,
                        Description = y.Description
                }
            );
            #endregion

            var newPurchaseOrder = new PurchaseOrder(itemList);

            var poId = await _dataService.InsertPurchaseOrderAsync(newPurchaseOrder);

            var listLineItems = itemList.Select (x => {
               return new SessionLineItemOptions {
                Name = x.Name,
                Description = x.Description,
                Amount = (long)(x.Price * 1000),
                Currency = "usd",
                Quantity = x.Quantity,
                };
            });

            var salesTax = listLineItems.Sum(x => x.Amount)*08;

            listLineItems.Append(new SessionLineItemOptions{
                Name = "Sales Tax",
                Description = "CA 8%",
                Quantity = 1,
                Currency = "usd"
            });

            var options = new SessionCreateOptions {
                SuccessUrl = "http://localhost:4200/result?session_id={CHECKOUT_SESSION_ID}",
                CancelUrl = "http://example.com/cancel",
                PaymentMethodTypes = new List<string>{
                    "card"
                },
                LineItems = listLineItems.ToList(),
            };

            

            //var service = new SessionService();
            Session session = sessions.Create (options);

            newPurchaseOrder.Id = poId;
            newPurchaseOrder.StripeSessionId = session.Id;

            _dataService.SavePurchaseOrder(newPurchaseOrder);
            return session;
        }
    }
}