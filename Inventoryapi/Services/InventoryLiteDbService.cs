using System.Collections.Generic;
using System.Linq;
using LiteDB;
using MyStore.Models;

namespace Inventoryapi.Services {
    public class InventoryLiteDbService {
        ILiteCollection<InventoryItem> Inventory;
        public InventoryLiteDbService (LiteDatabase database) {
            Inventory = database.GetCollection<InventoryItem>
                ("inventoryitem");
        }

        public int PopulateData (List<InventoryItem> items) {
            return Inventory.InsertBulk (items);
        }
        public IEnumerable<InventoryItem>
            getInventoryItems () {
                return Inventory.Query ().ToEnumerable ();
            }

        public InventoryItem Update (InventoryItem item) {
            Inventory.Update (item);
            return item;
        }

        public bool Delete (int id) {
            return Inventory.Delete (id);

        }

        public InventoryItem GetInventoryItemById (int id) {
            return Inventory.FindById (id);
        }

        public int Insert (InventoryItem item) {
            return Inventory.Insert (item);
        }

        public bool UpdateName (ChangeNameRequest request) {
            var item = Inventory.FindById (request.Id);
            item.Name = request.Name;
            return Inventory.Update (item);
        }

        public IEnumerable<InventoryItem> GetItemsLessThan (double price) {
            return Inventory.Query ()
                .Where (x => x.Price < price)
                .ToEnumerable ();
        }

        public void getIdsInStorageLocation (string location) {
            var item = Inventory.Find (x => x.StorageLocation == location);

            var ids = item.Select (x => {
                return new ChangeNameRequest {
                Id = x.Id,
                Name = x.Name
                };
            });
        }
    }
}