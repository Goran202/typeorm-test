import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Organization } from "./entity/Organization";
import { Location } from "./entity/Location";

createConnection()
  .then(async connection => {
    //USER
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.id = 33;
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.nick = "Tim";
    user.stravaUserName = "StravaTim";
    user.is_superadmin = false;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    //LOCATIONS
    console.log("Inserting a new organization into the database...");
    const location = new Location();
    location.id = 101;
    location.lat = 20;
    location.lng = 30;
    location.radius = 500;
    await connection.manager.save(location);
    console.log("Saved a new organization with id: " + location.id);

    console.log("Loading location from the database...");
    const locations = await connection.manager.find(Location);
    console.log("Loaded locations: ", location);

    ////////////////////ORGANIZATIONS////////////////////////
    console.log("Inserting a new organization into the database...");
    const organization = new Organization();
    organization.id = 101;
    organization.name = "OŠ Nazor";
    await connection.manager.save(organization);
    console.log("Saved a new organization with id: " + organization.id);

    console.log("Loading organizations from the database...");
    const organizations = await connection.manager.find(Organization);
    console.log("Loaded organizations: ", organizations);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));
