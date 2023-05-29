using Microsoft.EntityFrameworkCore;
using milkStore.Api.Data;
public static class SeedDataFromFile
{

    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ApplicationDbContext(
            serviceProvider.GetRequiredService<DbContextOptions<ApplicationDbContext>>()))
        {
            
            string jsonFilePath = "Milk-Store-App/milkStore.Api/milk.json";
            string jsonContent = File.ReadAllText(jsonFilePath);
            milkFromJson seedData = JsonConvert.DeserializeObject<milkFromJson>(jsonContent);
            
            foreach(var item in seedData.results)
            {
                var newEntry = new milkStore {
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