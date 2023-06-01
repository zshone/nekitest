using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PropertyManagementDotnetWebApi
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<NotificationsResponse> Get()
        {
            return Ok(new NotificationsResponse());
        }
    }
}
