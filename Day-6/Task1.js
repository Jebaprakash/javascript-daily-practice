const user = {
  id: 1,
  profile: {
    name: "Prakash",
    address: {
      city: "Chennai",
      country: "India"
    }
  },
  skills: ["JS", "Node", "React"]
};

const user2 = {
      name :user.profile.name,
      city: user.profile.address.city,
      FirstSkill : user.skills[0]
}

console.log(user2)