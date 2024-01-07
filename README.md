# Announcement ⚠️
Apologies to Mr.Manda, this project is still in the process of completion. The following is the list:

* Slicing Landing Page and Search Car ✅
* Consume API Search Car ✅
* UI Form Login ✅
* UI Layout Dashboard ✅
* UI Layouts for CRUD ✅
* Register - Login and JWT Consume ✅
* Consume API CRUD ✅

## Coming Soon:
* OAuth Implementation
* Challenge Chapter 08


## Flow:
* Must register as an admin `/register`
* Login as admin at `/login`
* Let's explore the dashboard and functionality


## Example Data for Create Form Data in Admin

```json
{
  "plate": "YND-1892",
  "manufacture": "Chevy",
  "model": "Malibu",
  "image": "https://i.ibb.co/FJThDbH/car11-min.jpg",
  "rentPerDay": 700000,
  "capacity": 2,
  "description": " Cloth covered headliner. Sentry Key theft deterrent system. Air conditioning w/in-cabin microfilter.",
  "availableAt": "2024-01-30T02:49:05.563Z",
  "transmission": "Automatic",
  "available": false,
  "type": "Coupe",
  "year": 2019,
  "options": [
    "Alloy Wheels",
    "Power Windows",
    "Alloy Wheels",
    "Alloy Wheels",
    "Alarm",
    "Bucket Seats",
    "Bucket Seats"
  ],
  "specs": [
    "Cloth covered headliner",
    "Sentry Key theft deterrent system",
    "Air conditioning w/in-cabin microfilter",
    "Driver & front passenger map pockets",
    "Security alarm",
    "Dual bright exhaust tips",
    "Compact spare tire"
  ]
}
```





# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
