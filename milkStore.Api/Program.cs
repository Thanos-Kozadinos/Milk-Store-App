using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using milkStore.Api.Data;
var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddDbContext<ApplicationDbContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("ApplicationDbContext") ?? throw new InvalidOperationException("Connection string 'ApplicationDbContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    SeedDatabaseForJson.Initialize(services);
}
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(policy =>
      {
          policy.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();  //set the allowed origin
      });
}


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
