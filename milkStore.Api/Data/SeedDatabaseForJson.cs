using Microsoft.EntityFrameworkCore;
using milkStore.Api.Models;
using Newtonsoft.Json;
namespace milkStore.Api.Data;
public static class SeedDatabaseForJson
{

    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ApplicationDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
        {
            
            string jsonFilePath = "D:\\DATA SCIENCE\\Software Engineering\\My github\\Milk-Store-App\\milkStore.Api";
            string jsonContent = File.ReadAllText(jsonFilePath);
            milkFromJson seedData = JsonConvert.DeserializeObject<milkFromJson>(jsonContent);
            
            foreach(var item in seedData.results)
            {
                var newEntry = new milkStorage {
                    Name = item.Name,
                    Type = item.Type,
                    Storage = item.Storage,
                    productId = item.productId
                };
                context.milkStorage.Add(newEntry);
                context.SaveChanges();
            }
        }
    }
}