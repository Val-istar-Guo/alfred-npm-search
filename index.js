const alfy = require('alfy');

const data = await alfy.fetch(`https://www.npmjs.com/search?q=${alfy.input}`, {
  headers: {
    'x-spiferack': 1,
  }
});

if (data.objects) {
  const items = data.objects.map(item => ({
      title: `${item.package.name}`,
      subtitle: item.package.description,
      arg: item.package.links.npm
  }))

  if (!items.length) {
    items.push({
      title: 'Cannot find package',
    })
  }

  alfy.output(items);
} else {
  const items = [{
    title: data.package,
    subtitle: data.packument.description,
    arg: `https://www.npmjs.com/package/${data.package}`
  }]

  alfy.output(items);
}
