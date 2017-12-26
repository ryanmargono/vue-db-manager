<template>
  <div>

    <md-toolbar>
        <h3 class="md-title"style="flex: 1"> Blue Comet Users Management </h3>
        <md-button class="md-raised" v-on:click="showForm=!showForm"> Add</md-button>
    </md-toolbar>
    
    <div v-if="showForm">
            <md-card class="md-flex-50 md-flex-small-100">
                <md-card-header>
                    <div class="md-title">Add User</div>
                </md-card-header>
                <md-card-content>
                <div class="md-layout-row md-layout-wrap md-gutter">
                    <div class="md-flex md-flex-small-100">     
                        <md-field>
                            <label for="name"> Name </label>
                            <md-input name="name" id="name">  </md-input>
                        </md-field>
                        <md-field>
                            <label for="username"> Username </label>
                            <md-input name="username" id="username">  </md-input>
                        </md-field>
                        <md-field>
                            <label for="email"> Email </label>
                            <md-input name="email" id="email">  </md-input>
                        </md-field>
                        <md-field>
                            <label for="name"> Website </label>
                            <md-input name="website" id="website">  </md-input>
                        </md-field>
                    </div>
                </div>
                </md-card-content>
                <md-card-actions>
                    <md-button v-on:click="submitForm">Create user</md-button>
                 </md-card-actions>
            </md-card>
        </form>
        <md-divider></md-divider>
    </div>
    <div v-else> </div>
    
    <div v-if="users && users.length">
        <md-table>
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Username</md-table-head>
                <md-table-head>Email</md-table-head>
                <md-table-head>Website</md-table-head>
                <md-table-head></md-table-head>
            </md-table-row>

            <md-table-row v-for="user of users">
                <md-table-cell md-numeric>{{user.id}}</md-table-cell>
                <md-table-cell>{{user.name}}</md-table-cell>
                <md-table-cell>{{user.username}}</md-table-cell>
                <md-table-cell>{{user.email}}</md-table-cell>
                <md-table-cell>{{user.website}}</md-table-cell>
                <md-table-cell><md-button v-on:click="deleteUser(user.id)">Delete</md-button></md-table-cell>
            </md-table-row>
        </md-table>
    </div>

  </div>
</template>

<script>
const comp = {
    data(){
        return {
            users:[],
            showForm: false,
            currentId: 0,
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.users = res.data
            this.currentId = res.data.length
            })
    },
    methods: {
        submitForm: function() {
            this.currentId++
            const name = document.getElementById('name').value;
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const website = document.getElementById('website').value;
            const newUser = {
                id: this.currentId,
                name,
                username,
                email,
                website,
            }
            this.users.push(newUser)
            this.showForm = false
            alert(`New user with name: ${name} has been successfully added!`)
        },
        deleteUser: function(userId) {
            const index = this.users.findIndex(user=> user.id === userId)
            this.users.splice(index, 1)
            alert(`User with ID: ${userId} has been successfully deleted!`)
        }
    }
}

export default comp;
</script>