const adminNavLinks =[
  {
    id: 1,
    text: 'add Music',
    link: '/admin/add-music',
    icon: 'fa fa-plus feather'
  },
  {
    id: 2,
    text: 'list Musics',
    link: '/admin/all-music',
    icon: 'fa fa-list feather'
  },
  {
    id: 3,
    text: 'delete Music',
    link: '/admin/delete-music',
    icon: 'fa fa-trash feather'
  },
  {
    id: 4,
    text: 'edit Music',
    link: '/admin/edit-music',
    icon: 'fa fa-pencil feather'
  },
]

const getAdminNavLinks = ()=>{
  return [...adminNavLinks]
}

export default getAdminNavLinks;