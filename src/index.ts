import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Organization } from "./entity/Organization";
import { Location } from "./entity/Location";
import { User_organization } from "./entity/User_organization";
import { Trip } from "./entity/Trip";

createConnection()
  .then(async connection => {
    //////////////////////USER////////////////////
    //USER
    console.log("Inserting a new user into the database...");
    let user1 = new User();
    //user.id = 33;
    user1.firstName = "Timber";
    user1.lastName = "Saw";
    user1.nick = "Tim";
    user1.stravaUserName = "StravaTim";
    user1.is_superadmin = true;
    await connection.manager.save(user1);
    console.log("Saved a new user with id: " + user1.id);
    console.log("Loading users from the database...");
    let users1 = await connection.manager.find(User);
    console.log("Loaded users: ", users1);
    //END-USER
    //USER
    console.log("Inserting a new user into the database...");
    let user2 = new User();
    //user.id = 33;
    user2.firstName = "Ivo";
    user2.lastName = "Andrić";
    user2.nick = "Ićo";
    user2.stravaUserName = "StravaIćo";
    user2.is_superadmin = false;
    await connection.manager.save(user2);
    console.log("Saved a new user with id: " + user2.id);
    console.log("Loading users from the database...");
    let users2 = await connection.manager.find(User);
    console.log("Loaded users: ", users2);
    //END-USER
    //USER
    console.log("Inserting a new user into the database...");
    let user3 = new User();
    //user.id = 33;
    user3.firstName = "Mijo";
    user3.lastName = "Crnoja";
    user3.nick = "Crni";
    user3.stravaUserName = "StravaCrni";
    user3.is_superadmin = false;
    await connection.manager.save(user3);
    console.log("Saved a new user with id: " + user3.id);
    console.log("Loading users from the database...");
    let users3 = await connection.manager.find(User);
    console.log("Loaded users: ", users3);
    //END-USER
    //USER
    console.log("Inserting a new user into the database...");
    let user4 = new User();
    //user.id = 33;
    user4.firstName = "Mile";
    user4.lastName = "Banda";
    user4.nick = "Miki";
    user4.stravaUserName = "StravaMiki";
    user4.is_superadmin = false;
    await connection.manager.save(user4);
    console.log("Saved a new user with id: " + user4.id);
    console.log("Loading users from the database...");
    let users4 = await connection.manager.find(User);
    console.log("Loaded users: ", users4);
    //END-USER
    //USER
    console.log("Inserting a new user into the database...");
    let user5 = new User();
    //user.id = 33;
    user5.firstName = "Jaca";
    user5.lastName = "Splaca";
    user5.nick = "Jaja";
    user5.stravaUserName = "StravaJaja";
    user5.is_superadmin = false;
    await connection.manager.save(user5);
    console.log("Saved a new user with id: " + user5.id);
    console.log("Loading users from the database...");
    let users5 = await connection.manager.find(User);
    console.log("Loaded users: ", users5);
    //END-USER
    //USER
    console.log("Inserting a new user into the database...");
    let user6 = new User();
    //user.id = 33;
    user6.firstName = "Mujo";
    user6.lastName = "Terić";
    user6.nick = "Mo";
    user6.stravaUserName = "StravaMo";
    user6.is_superadmin = false;
    await connection.manager.save(user6);
    console.log("Saved a new user with id: " + user6.id);
    console.log("Loading users from the database...");
    let users6 = await connection.manager.find(User);
    console.log("Loaded users: ", user6);
    //END-USER

    ////////////////////ORGANIZATIONS////////////////////////
    //ORGANIZATION
    console.log("Inserting a new organization into the database...");
    let organization = new Organization();
    //organization.id = 101;
    organization.name = "OŠ Nazor";
    await connection.manager.save(organization);
    console.log("Saved a new organization with id: " + organization.id);
    console.log("Loading organizations from the database...");
    let organizations = await connection.manager.find(Organization);
    console.log("Loaded organizations: ", organizations);
    //END-ORGANIZATION
    //ORGANIZATION
    console.log("Inserting a new organization into the database...");
    let organization2 = new Organization();
    //organization.id = 101;
    organization2.name = "OŠ Modec";
    await connection.manager.save(organization2);
    console.log("Saved a new organization with id: " + organization2.id);
    console.log("Loading organizations from the database...");
    let organizations2 = await connection.manager.find(Organization);
    console.log("Loaded organizations: ", organizations2);
    //END-ORGANIZATION

    ////////////////////LOCATIONS////////////////////
    //LOCATION
    console.log("Inserting a new location into the database...");
    let location = new Location();
    //location.id = 101;
    location.lat = 20;
    location.lng = 30;
    location.radius = 500;
    location.organization = organization;
    await connection.manager.save(location);
    console.log("Saved a new organization with id: " + location.id);
    console.log("Loading location from the database...");
    let locations = await connection.manager.find(Location);
    console.log("Loaded locations: ", locations);
    //END-LOCATION
    //LOCATION
    console.log("Inserting a new location into the database...");
    location = new Location();
    //location.id = 101;
    // location = 101;
    location.lat = 22;
    location.lng = 32;
    location.radius = 600;
    location.organization = organization;
    await connection.manager.save(location);
    console.log("Saved a new organization with id: " + location.id);
    console.log("Loading location from the database...");
    locations = await connection.manager.find(Location);
    console.log("Loaded locations: ", locations);
    //END-LOCATION

    ////////////////////USER_ORGANIZATIONS////////////////////////
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    let user_organization = new User_organization();
    //user_organization.id = 101;
    user_organization.is_member = true;
    user_organization.is_admin = true;
    user_organization.user = user1;
    user_organization.organization = organization;
    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    let user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    user_organization = new User_organization();
    console.log("TEST!");

    //user_organization.id = 101;
    user_organization.is_member = true;
    console.log("TEST2");

    user_organization.is_admin = false;
    user_organization.user = user2;
    user_organization.organization = organization;
    console.log("TEST3");

    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    user_organization = new User_organization();
    //user_organization.id = 101;
    user_organization.is_member = true;
    user_organization.is_admin = false;
    user_organization.user = user3;
    user_organization.organization = organization;
    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    user_organization = new User_organization();
    //user_organization.id = 101;
    user_organization.is_member = true;
    user_organization.is_admin = true;
    user_organization.user = user4;
    user_organization.organization = organization2;
    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    user_organization = new User_organization();
    //user_organization.id = 101;
    user_organization.is_member = true;
    user_organization.is_admin = false;
    user_organization.user = user5;
    user_organization.organization = organization2;
    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION
    //USER_ORGANIZATION
    console.log("Inserting a new User_organization into the database...");
    user_organization = new User_organization();
    //user_organization.id = 101;
    user_organization.is_member = true;
    user_organization.is_admin = false;
    user_organization.user = user6;
    user_organization.organization = organization2;
    await connection.manager.save(user_organization);
    console.log(
      "Saved a new user_organization with id: " + user_organization.id
    );
    console.log("Loading user_organization from the database...");
    user_organizations = await connection.manager.find(User_organization);
    console.log("Loaded user_organizations: ", user_organizations);
    //END-USER_ORGANIZATION

    ////////////////////TRIPS////////////////////
    //TRIP
    console.log("Inserting a new trip into the database...");
    let trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user1;
    trip.organization = organization;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    let trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP
    //TRIP
    console.log("Inserting a new trip into the database...");
    trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user2;
    trip.organization = organization;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP
    //TRIP
    console.log("Inserting a new trip into the database...");
    trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user3;
    trip.organization = organization;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP
    //TRIP
    console.log("Inserting a new trip into the database...");
    trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user4;
    trip.organization = organization2;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP
    //TRIP
    console.log("Inserting a new trip into the database...");
    trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user5;
    trip.organization = organization2;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP
    //TRIP
    console.log("Inserting a new trip into the database...");
    trip = new Trip();
    trip.length = 550;
    trip.count = 5;
    trip.user = user6;
    trip.organization = organization2;
    await connection.manager.save(trip);
    console.log("Saved a new trip with id: " + trip.id);
    console.log("Loading location from the database...");
    trips = await connection.manager.find(Trip);
    console.log("Loaded trips: ", trips);
    //END-TRIP

    console.log("Here you can setup and run express/koa/any other framework.");
  })

  .catch(error => console.log(error));
