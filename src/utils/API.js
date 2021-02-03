import axios from "axios";

export default {
    getEmployees: function () {
        return new Promise((resolve, reject) => {
            axios
                .get("http://randomuser.me/api/?results=30&nat=us")
                .then(res => {
                    const users = res.data.results;
                    const results = users;
                    resolve(results);
                })
                .catch(err => reject(err));
        });
    },
};
