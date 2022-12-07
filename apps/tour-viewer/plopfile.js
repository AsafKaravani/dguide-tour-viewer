export default function (plop) {
	// controller generator
	plop.setGenerator('View Component', {
		description: 'New View component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/{{kebabCase name}}/{{pascalCase name}}.tsx',
				templateFile: '_templates/ViewComponent.tsx.hbs',
			},
			{
				type: 'add',
				path: 'src/{{kebabCase name}}/{{pascalCase name}}.stories.tsx',
				templateFile: '_templates/ViewComponent.stories.tsx.hbs',
			},
		],
	});

	plop.setGenerator('Smart Component', {
		description: 'New Smart component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Enter component name:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/{{kebabCase name}}/{{pascalCase name}}.tsx',
				templateFile: '_templates/SmartComponent.tsx.hbs',
			},
		],
	});
}
