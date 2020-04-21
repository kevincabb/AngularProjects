using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Inventoryapi.Models
{
    public class PurchaseOrderItem
    {
        [Key][DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id {get; set; }
        public int InventoryItemId{get; set; }
        public int Quantity {get; set; }
        public int PurchaseOrderId {get; set; }
    }
}