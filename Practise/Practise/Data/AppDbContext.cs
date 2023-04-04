using Microsoft.EntityFrameworkCore;
using Practise.Models;

namespace Practise.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Slider> Sliders { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public DbSet<SliderInfo> SldiderInfos { get; set; }
    }
}
