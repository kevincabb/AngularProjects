using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using Inventoryapi.Models;

namespace MyStore.Models {
    public class PurchaseOrder {

        [Key]
        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int PaymentTypeId { get; set; }
        public DateTime Datetime { get; set; }
        public double Subtotal { get; set; }
        public double SalesTax { get; set; }
        public string NameOfBuyer { get; set; }

        // [ForeignKey("InventoryItemId")]
        // public virtual InventoryItem Item { get; set; }

        // [ForeignKey("PaymentTypeId")]
        // public virtual PaymentType PaymentType { get; set; }

        // public double Total => Subtotal + SalesTax;

       
        [ForeignKey ("PaymentTypeId")]
        public virtual PaymentType PaymentType { get; set; }
        public ICollection<PurchaseOrderItem> PurchaseOrderItems {get; set; }
        public string StripeSessionId {get; set; }
        [NotMapped] public double Total => Subtotal + SalesTax; // tells ef not to map this to database

        public PurchaseOrder(){}

        public PurchaseOrder(IEnumerable<PurchaseOrderRequest> items){
            this.PaymentTypeId = 1;
            PurchaseOrderItems = items.Select(x => new PurchaseOrderItem(){
                InventoryItemId = x.Id,
                Quantity = x.Quantity
            }).ToList();

            Subtotal = items.Sum(x => x.Price);
            SalesTax = Subtotal * .08;
        }

        

    }

    public class PurchaseOrderRequest{
        public int Id {get; set;}
        public int Quantity {get; set; }
        public string Name {get; set; }
        public double Price {get; set; }
        public string Description {get; set; }
    }
}