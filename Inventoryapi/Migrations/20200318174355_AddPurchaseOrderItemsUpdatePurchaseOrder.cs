using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Inventoryapi.Migrations
{
    public partial class AddPurchaseOrderItemsUpdatePurchaseOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseOrders_InventoryItems_InventoryItemId",
                table: "PurchaseOrders");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseOrders_InventoryItemId",
                table: "PurchaseOrders");

            migrationBuilder.DropColumn(
                name: "InventoryItemId",
                table: "PurchaseOrders");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "PurchaseOrders");

            migrationBuilder.CreateTable(
                name: "PurchaseOrderItems",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InventoryItemId = table.Column<int>(nullable: false),
                    Quantity = table.Column<int>(nullable: false),
                    PurchaseOrderId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PurchaseOrderItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PurchaseOrderItems_PurchaseOrders_PurchaseOrderId",
                        column: x => x.PurchaseOrderId,
                        principalTable: "PurchaseOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "PurchaseOrderItems",
                columns: new[] { "Id", "InventoryItemId", "PurchaseOrderId", "Quantity" },
                values: new object[,]
                {
                    { 1, 1, 1, 2 },
                    { 2, 3, 1, 1 },
                    { 3, 1, 2, 1 },
                    { 4, 4, 2, 2 }
                });

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Datetime", "SalesTax", "Subtotal" },
                values: new object[] { new DateTime(2020, 3, 17, 10, 43, 54, 204, DateTimeKind.Local).AddTicks(5610), 0.45000000000000001, 5.5 });

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Datetime", "SalesTax", "Subtotal" },
                values: new object[] { new DateTime(2020, 3, 16, 10, 43, 54, 204, DateTimeKind.Local).AddTicks(9190), 6.3499999999999996, 98.5 });

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrderItems_PurchaseOrderId",
                table: "PurchaseOrderItems",
                column: "PurchaseOrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PurchaseOrderItems");

            migrationBuilder.AddColumn<int>(
                name: "InventoryItemId",
                table: "PurchaseOrders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "PurchaseOrders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Datetime", "InventoryItemId", "Quantity", "SalesTax", "Subtotal" },
                values: new object[] { new DateTime(2020, 3, 8, 11, 59, 0, 393, DateTimeKind.Local).AddTicks(250), 1, 2, 0.25, 1.0 });

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Datetime", "InventoryItemId", "Quantity", "SalesTax", "Subtotal" },
                values: new object[] { new DateTime(2020, 3, 7, 11, 59, 0, 393, DateTimeKind.Local).AddTicks(3510), 3, 4, 4.5, 18.0 });

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseOrders_InventoryItemId",
                table: "PurchaseOrders",
                column: "InventoryItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseOrders_InventoryItems_InventoryItemId",
                table: "PurchaseOrders",
                column: "InventoryItemId",
                principalTable: "InventoryItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
