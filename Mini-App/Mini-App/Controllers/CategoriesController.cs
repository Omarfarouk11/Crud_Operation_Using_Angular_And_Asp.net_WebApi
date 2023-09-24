using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mini_App.Dtos;
using Mini_App.Models;
using Mini_App.Repository.category;

namespace Mini_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController( ICategoryService service)
        {
            _categoryService = service;

        }
        [HttpGet]
        public IActionResult GetAllCategory() { 
           var categories=_categoryService.GetAllCategory();
            return Ok(categories);
        }
        [HttpGet("{ID}")]
        public IActionResult GetCategoryByID(Guid ID) {
            var category= _categoryService.GetCategoryById(ID);
            if(category == null)
            {
                return NotFound("Sorry The Category Is Not Found Please Try Again...");
            }
            else
            {
                return Ok(category);
            }
           
        }
        [HttpDelete("{ID}")]
        public IActionResult DeleteCategory(Guid ID)
        {
           var category= _categoryService.DeleteCategory(ID);
            if (!category)
            {
                return NotFound("Sorry The Category Is Not Found Please Try Again...");
            }
            else
            {
                return Ok("The Category Deleted Successfully ... ");
            }
            


        }

        [HttpPost]
        public IActionResult AddCategory(CategoryDtos categoryDtos)
        {
            if(categoryDtos == null)
            {
                return BadRequest("Please Add The Category Fields");
            }
            var category = new Category
            {
                Name = categoryDtos.Name,
                URL_Handle = categoryDtos.URL_Handle,
            };
            _categoryService.AddCategory(category);
            return Ok(category);

        

        }
        [HttpPut("{ID}")]
        public IActionResult UpdateCategory(CategoryDtos categoryDtos,Guid ID)
        {
            var existedcategory=_categoryService.GetCategoryById(ID);
            if(existedcategory==null)
            {
                return NotFound("Sorry The Category Is Not Found Please Try Again...");
            }
            else
            {
                existedcategory.Name= categoryDtos.Name;
                existedcategory.URL_Handle= categoryDtos.URL_Handle;
                _categoryService.UpdateCategory(existedcategory, ID);
            }
            return Ok("The Category Is Updated Successfully ...");

        }

    }
}
