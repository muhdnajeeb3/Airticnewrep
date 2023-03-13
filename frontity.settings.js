const settings = {
  "name": "airtics",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Airtics",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
          
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        },
        
        
      }
      
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7" 

  ],
  libraries: {
    source: {
      // Replace "example.com" with the URL of your WordPress site
      api: "https://example.com/wp-json",
      params: {
        // ...
      },
      // Define your custom routes here
      post: {
        path: "/coursedetails/",
        endpoint: "coursedetails"
      }
    }
  }
};

export default settings;
