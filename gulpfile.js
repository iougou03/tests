const gulp = require("gulp");
const ts = require("gulp-typescript");

const nodeProject = ts.createProject("./src/tsconfig.json");

const builds = {
  node: () => gulp
  .src(["src/*.ts"])
  .pipe(nodeProject())
  .pipe(gulp.dest("dist/"))
};

gulp.task("build", gulp.parallel([builds.node]));