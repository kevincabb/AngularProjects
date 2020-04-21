using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Inventoryapi.Controllers;
using InventoryApi.Services;
using LiteDB;
using Inventoryapi.Services;
using Microsoft.EntityFrameworkCore;
using Stripe;
using Stripe.Checkout;

namespace Inventoryapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            StripeConfiguration.ApiKey = Configuration.GetSection("Stripe").GetValue("ApiKey", "");
            
            services.AddControllers();
            services.AddScoped<InventoryLiteDbService>();
            services.AddSingleton<InventoryServices>();
            services.AddSingleton<LiteDatabase>(new
            LiteDatabase(@"Filename=./Data/LiteDb.db;Mode=Shared"));

            services
                .AddScoped<InventoryLiteDbService>()
                .AddScoped<DataService>()
                .AddScoped<StripeHelperService>();
            

            services
                .AddTransient<SessionService>();


            var connString = Configuration.GetConnectionString("MyDatabase");
            services.AddDbContext<DataContext>(options => options.UseSqlServer(connString));

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                builder => builder.WithOrigins("http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .AllowCredentials()
                );
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("CorsPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
