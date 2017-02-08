using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RepositoryDataAccess;

namespace RepositoryWebAPI.Controllers
{
    public class RepositoryController : ApiController
    {
        RepositoryManagementEntities db = new RepositoryManagementEntities();
        [HttpGet]
        public IEnumerable<Product> getProductList()
        {
            return db.Product.ToList();
        }

        [HttpGet]
        public Product getProductByID(int id)
        {
            return db.Product.FirstOrDefault(product => product.ID == id);
        }

        [HttpPost]
        public Product postProduct(Product product)
        {
            db.Product.Add(product);
            db.SaveChanges();
            return product;
        }

        [HttpPut]
        public Product putProduct(Product product)
        {
            db.Product.Attach(product);
            db.Entry(product).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();
            return product;
        }

        [HttpDelete]
        public Product deleteProduct(int ID)
        {
            Product product = db.Product.FirstOrDefault(pro => pro.ID == ID);
            db.Product.Remove(product);
            db.SaveChanges();
            return product;
        }
    }
}
