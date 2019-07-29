using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class registrationsController : ApiController
    {
        private lagnsohalaEntities1 db = new lagnsohalaEntities1();

        // GET: api/registrations
        public IQueryable<registration> Getregistrations()
        {
            return db.registrations;
        }

        // GET: api/registrations/5
        [ResponseType(typeof(registration))]
        public IHttpActionResult Getregistration(string id)
        {
            registration registration = db.registrations.Find(id);
            if (registration == null)
            {
                return NotFound();
            }

            return Ok(registration);
        }

        // PUT: api/registrations/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putregistration(string id, registration registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registration.username)
            {
                return BadRequest();
            }

            db.Entry(registration).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!registrationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/registrations
        [ResponseType(typeof(registration))]
        public IHttpActionResult Postregistration(registration registration)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.registrations.Add(registration);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (registrationExists(registration.username))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = registration.username }, registration);
        }

        // DELETE: api/registrations/5
        [ResponseType(typeof(registration))]
        public IHttpActionResult Deleteregistration(string id)
        {
            registration registration = db.registrations.Find(id);
            if (registration == null)
            {
                return NotFound();
            }

            db.registrations.Remove(registration);
            db.SaveChanges();

            return Ok(registration);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool registrationExists(string id)
        {
            return db.registrations.Count(e => e.username == id) > 0;
        }
    }
}