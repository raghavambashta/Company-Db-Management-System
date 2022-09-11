using DemoWebApi.Models;
using DemoWebApi.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
namespace DemoWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeptController : ControllerBase
    {
        db1045Context db = new db1045Context();
        [HttpGet]
        [Route("ListDept")]
        public IActionResult GetDept()
        {
            //var data = db.Depts.ToList();
            //var data = from dept in db.Depts select dept;
            var data = from dept in db.Depts select new { Id = dept.Id, Name = dept.Name, Location = dept.Location };
            return Ok(data);
        }
        [HttpGet]
        [Route("ListDept/{id}")]
        public IActionResult GetDept(int? id)
        {
            if (id == null)
            {
                return BadRequest("Id cannot be null");
            }
            //var data = (from dept in db.Depts.Where(d => d.Id == id).Select(d => new {id = d.Id, Name = d.Name, Location = d.Location}}.FirstorDefault();
            var data = (from dept in db.Depts where dept.Id == id select new { Id = dept.Id, Name = dept.Name, Location = dept.Location }).FirstOrDefault();
            if (data == null)
            {
                return NotFound($"Department {id} not present");
            }
            return Ok(data);
        }

        //...api/dept/listcity?city=mumbai
        [HttpGet]
        [Route("ListCity")]
        public IActionResult GetCity([FromQuery] string city)
        {
            var data = db.Depts.Where(d => d.Location == city);
            if (data.Count() == 0)
            {
                return NotFound($"City {city} not present");
            }
            return Ok(data);
        }

        [HttpGet]
        [Route("ShowDept")]
        public IActionResult GetDeptInfo() 
        {
            var data = db.DeptInfo_VMs.FromSqlInterpolated<DeptInfo_VM>($"DeptInfo");
            return Ok(data);
        }

        [HttpPost]
        [Route("AddDept")]
        public IActionResult PostDept(Dept dept)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    //db.Depts.Add(dept);
                    //db.SaveChanges();

                    //using stored procedure to add records
                    db.Database.ExecuteSqlInterpolated($"deptadd {dept.Id}, {dept.Name}, {dept.Location}");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.InnerException.Message);  
                }
            }
            return Created("Record Successfully Added", dept);
        }

        [HttpPut]
        [Route("EditDept/{id}")]
        public IActionResult PutDept(int id, Dept dept)
        {
            if (ModelState.IsValid)
            {
                Dept odept = db.Depts.Find(id);
                odept.Name = dept.Name;
                odept.Location = dept.Location;
                db.SaveChanges();
                return Ok();
            }
            return BadRequest("Unable to edit record");
        }

        [HttpDelete]
        [Route("DeleteDept/{id}")]
        public IActionResult DeleteDept(int id)
        {
            var data = db.Depts.Find(id);
            db.Depts.Remove(data);
            db.SaveChanges();
            return Ok();
        }
    }
}
