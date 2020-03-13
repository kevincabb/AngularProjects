using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MyStore.Models;

namespace Inventoryapi.Services
{
    public class DataService
    {
        public readonly DataContext _context;
        public DataService(DataContext dataContext){
            _context = dataContext;
        }

        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            return _context.InventoryItems;
        }

        public InventoryItem GetInventoryItemById(int id){
            return _context.InventoryItems.FirstOrDefault(x => x.Id == id);
            // return _context.InventoryItems.LastOrDefault(x => x.Id == id);
            // return _context.InventoryItems.SingleOrDefault(x => x.Id == id);
        }

        public IEnumerable<InventoryItem> GetItemsLessThan(double price)
        {
            return _context.InventoryItems.Where(x => x.Price < price);
        }

        public bool update(InventoryItem item){
            _context.Update<InventoryItem>(item);
            return _context.SaveChanges() != 0;
        }

        public bool Delete(int id){
            var item = GetInventoryItemById(id);
            _context.Remove(item);

            return _context.SaveChanges() != 0;
        }

        public IEnumerable<PurchaseOrder> GetPurchaseOrders()
        {
            return _context.PurchaseOrders
                .Include(x => x.Item)
                .Include(x => x.PaymentType);
        }


    }
}