using System;
using System.Collections.Generic;

#nullable disable

namespace DemoWebApi.Models
{
    public partial class Dept
    {
        public Dept()
        {
            Emps = new HashSet<Emp>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Location { get; set; }

        public virtual ICollection<Emp> Emps { get; set; }
    }
}
