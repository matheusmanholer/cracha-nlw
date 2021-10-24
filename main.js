const socialMediaLinks = {
  github: 'matheusmanholer',
  youtube: 'channel/UCCI_kHqzEi6OHE4WwlKO4LA',
  facebook: 'omatheusmanholer',
  instagram: 'matheusmanholer',
  twitter: 'matheusmanholer'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const apiGitHubUrl = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(apiGitHubUrl)
    .then(apiGitHubResponse => apiGitHubResponse.json())
    .then(data => {
      nameAndLastName.textContent = data.name
      userBio.textContent = data.bio
      gitHubShortUserUrl.textContent = data.login
      gitHubUserLink.href = data.html_url
      mainPhoto.src = data.avatar_url
    })
}

getGitHubProfileInfos()
