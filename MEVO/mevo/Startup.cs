using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(mevo.Startup))]
namespace mevo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
