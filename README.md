# Example for 'nyc instrument --exclude \*\*/glob/\*\*' bug

To run the example:
```
npm install
npm run instrument-exclude
```

#### Expected behaviour:  
Nyc should create a folder 'instrumented' that contains a single instrumented file.  
This should be the only file not covered by an exclude, ./src/index.js


#### Actual behaviour:  
Nyc creates the folder 'instrumented' and it contains instrumented versions of all files.  
It contains ./src/index.js, ./src/3rd-party/index.js, and ./src/dist/index.js


#### Notes:  
To run the instrument command without and excludes `npm run instrument`  
To remove the 'instrumented' directory between tests `npm run clean`