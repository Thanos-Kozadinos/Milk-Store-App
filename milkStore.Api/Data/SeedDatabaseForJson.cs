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
            string jsonFilePath = "..\\milkStore.Api\\milk.json";
            string jsonContent = File.ReadAllText(jsonFilePath);
            milkFromJson seedData = JsonConvert.DeserializeObject<milkFromJson>(jsonContent);
            
            if (context.milkStorage.Any()) { return; }
            foreach(var item in seedData.results)
            {
                var newEntry = new milkStorage {
                    Name = item.name,
                    Type = item.type,
                    Storage = int.Parse(item.storage),
                    productId = item.id
                };
                context.milkStorage.Add(newEntry);
                context.SaveChanges();
            }
        }
    }
}