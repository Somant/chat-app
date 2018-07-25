const expect = require('expect');
const {Users}=require('./users');

describe('Users',()=>{
    var users;
    beforeEach(()=>{
        users=new Users;
        users.users=[{
            id:'1',
            name:'Mike',
            room:'Room1'
        },{
            id:'2',
            name:'Jen',
            room:'Room2'
        },{
            id:'3',
            name:'Joe',
            room:'Room1'
        }];
    });
    
    it('should create new user',()=>{
        var users= new Users();
        var user={
            id:'123',
            name:'Somant',
            room:'Room1'
        };
        var resUser= users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
    });

    it('should return users of room1',()=>{
        var userList= users.getUserList('Room1');

        expect(userList).toEqual(['Mike','Joe']);
    });
    
    it('should remove a user',()=>{
        var userId='1';
        var user=users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    })

    it('should not remove user',()=>{
        var userId='9';
        var user=users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    })

    it('should find a user',()=>{
        var userId='2';
        var user=users.getUser(userId);

        expect(user.id).toBe(userId);
    })

    it('should not find a user',()=>{
        var userId='4';
        var user=users.getUser(userId);

        expect(user).toBeFalsy();
    })

    it('should return users of room2',()=>{
        var userList= users.getUserList('Room2');

        expect(userList).toEqual(['Jen']);
    });

    
});