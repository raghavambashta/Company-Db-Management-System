using System.ComponentModel.DataAnnotations;

namespace DemoWebApi.ViewModels
{
    public class DeptInfo_VM
    {
        [Key]
        public string Name { get; set; }
        public int? Count { get; set; }
        public int? TotalSalary { get; set; }
    }
}
