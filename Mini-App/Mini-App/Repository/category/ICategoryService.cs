using Mini_App.Models;

namespace Mini_App.Repository.category
{
    public interface ICategoryService
    {

        IEnumerable<Category> GetAllCategory();
        Category GetCategoryById(Guid id);

        bool AddCategory(Category category);

        bool UpdateCategory(Category category, Guid Id);
        bool DeleteCategory(Guid id);
    }
}
