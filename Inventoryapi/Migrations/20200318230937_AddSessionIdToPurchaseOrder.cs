using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Inventoryapi.Migrations
{
    public partial class AddSessionIdToPurchaseOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "StripeSessionId",
                table: "PurchaseOrders",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 1,
                column: "Datetime",
                value: new DateTime(2020, 3, 17, 16, 9, 37, 440, DateTimeKind.Local).AddTicks(5670));

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 2,
                column: "Datetime",
                value: new DateTime(2020, 3, 16, 16, 9, 37, 440, DateTimeKind.Local).AddTicks(8140));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StripeSessionId",
                table: "PurchaseOrders");

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 1,
                column: "Datetime",
                value: new DateTime(2020, 3, 17, 10, 43, 54, 204, DateTimeKind.Local).AddTicks(5610));

            migrationBuilder.UpdateData(
                table: "PurchaseOrders",
                keyColumn: "Id",
                keyValue: 2,
                column: "Datetime",
                value: new DateTime(2020, 3, 16, 10, 43, 54, 204, DateTimeKind.Local).AddTicks(9190));
        }
    }
}
