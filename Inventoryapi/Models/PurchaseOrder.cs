using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MyStore.Models {
    public class PurchaseOrder {

        [Key]
        [DatabaseGenerated (DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int InventoryItemId { get; set; }
        public int PaymentTypeId { get; set; }
        public DateTime Datetime { get; set; }
        public int Quantity { get; set; }
        public double Subtotal { get; set; }
        public double SalesTax { get; set; }
        public string NameOfBuyer { get; set; }
        [NotMapped] public string ItemName => Item.Name;

        // [ForeignKey("InventoryItemId")]
        // public virtual InventoryItem Item { get; set; }

        // [ForeignKey("PaymentTypeId")]
        // public virtual PaymentType PaymentType { get; set; }

        // public double Total => Subtotal + SalesTax;

        [ForeignKey ("InventoryItemId")] // referencing the InventoryItemId above
        [JsonIgnore]
        public virtual InventoryItem Item { get; set; } // virtual allows ef to lazy load the property for efficieny
        [ForeignKey ("PaymentTypeId")]
        public virtual PaymentType PaymentType { get; set; }

        [NotMapped] public double Total => Subtotal + SalesTax; // tells ef not to map this to database

    }
}