using Mini_App.Applicationdbcontext;
using Mini_App.Models;

namespace Mini_App.Repository.category
{
    public class CategoryService : ICategoryService
    {
        private readonly ApplicationDbContext _dbContext;
        public CategoryService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;

        }
        public bool AddCategory(Category category)
        {
            if(category!=null)
            {
                _dbContext.categories.Add(category);
                _dbContext.SaveChanges();
                return true;
                
                
            }
            else
            {
                return false;
            }
          
        }

        public bool DeleteCategory(Guid id)
        {
            var category = _dbContext.categories.SingleOrDefault(c=>c.ID == id);
            if(category!=null) { 
                _dbContext.categories.Remove(category);
                _dbContext.SaveChanges();
                return true;
            }

            else
            {
                return false;

            }
        }

        public IEnumerable<Category> GetAllCategory()
        {
            return _dbContext.categories.ToList();
        }

        public Category GetCategoryById(Guid id)
        {
            var category = _dbContext.categories.SingleOrDefault(c => c.ID == id);
            if (category!=null)
            {
                return category;
            }
            else
            {
                return new Category() { };
            }
          
        }

        public bool UpdateCategory(Category category, Guid Id)
        {
            var existcategory = _dbContext.categories.Find(Id);
            if(existcategory!=null)
            {
                category.ID=existcategory.ID;
                category.Name=existcategory.Name;
                category.URL_Handle = existcategory.URL_Handle;
                _dbContext.categories.Update(category);

            }
            return _dbContext.SaveChanges() > 0 ? true : false;
        }
    }
}
