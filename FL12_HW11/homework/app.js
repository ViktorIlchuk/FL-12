const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function folderRender(data) {
  rootNode.innerHTML = goAroundTheTree(data);
  rootNode.onclick = function(event) {

    if (event.target.tagName !== 'SPAN') {
      return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) {
      return
    }
    
    childrenContainer.hidden = !childrenContainer.hidden;
  }
}

function goAroundTheTree(currentDataNode) {
  let li = '';
  let ul = '';
  for (let i = 0; i < currentDataNode.length; i += 1) {
    li = '';
    if (!currentDataNode[i].children && !currentDataNode[i].folder) {
      ul += '<ul>' + currentDataNode[i].title + '</ul>';
    }
    if (currentDataNode[i].children || currentDataNode[i].folder) {
      if (currentDataNode[i].children) {
       li += '<li>' + '<span class="material-icons">' + currentDataNode[i].title + '</span>' + 
       goAroundTheTree(currentDataNode[i].children) + '</li>';
        ul += '<ul>' + li + '</ul>'
      } else if (!currentDataNode[i].children || currentDataNode[i].folder) {
        ul += '<ul>' + '<span class="material-icons">' + currentDataNode[i].title + '</span>' + '</ul>'
      }
    } 
  }
  return ul || '' ;
  }


  window.onload = () => {
    folderRender(structure);
  }