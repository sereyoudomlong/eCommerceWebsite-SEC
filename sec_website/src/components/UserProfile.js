var UserProfile = (function() {

    var username = "";

    var getUsername = () => {
        return username;    // Or pull this from cookie/localStorage
    }

    var setUsername = (name) => {
        username = name;
        // Also set this in cookie/localStorage
    };

    return {
        getName: getUsername,
        setName: setUsername
    }

})();

export default UserProfile;