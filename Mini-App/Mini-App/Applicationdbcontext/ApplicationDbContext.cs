using Microsoft.EntityFrameworkCore;
using Mini_App.Models;

namespace Mini_App.Applicationdbcontext
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
        {}

        public DbSet<Category> categories { get; set; }


    }
}
