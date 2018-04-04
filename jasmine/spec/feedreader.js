/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
     describe('Expected interaction', function () {
     this.clickEventStub = $start[0];
     this.multi=fileEvent;
     this.single=imageLoader;
     describe('when the Simulation is started in the Controller', function () {
         it('Threads are spawned', function () {
             expect(this.clickEventStub).not.toBeDefined();
         });
         it('Data is transfered to multi threaded environment', function () {
             expect(this.multi).not.toBeDefined();
         });
         it('Data is transfered to single threaded environment', function () {
             expect(this.single).not.toBeDefined();
         });
     });
     describe('when the image processing happens in single threaded environment', function () {
         it('images are spawned', function () {
             expect(this.clickEventStub).toBeDefined();
         });
         it('filters are applied to the image', function () {
             expect(this.multi).not.toBeDefined();
         });
         it('Graphs are plotted and dataset is generated', function () {
             expect(this.single).not.toBeDefined();
         });
     });

     describe('when the image processing happens in multi threaded environment', function () {
         it('images are spawned', function () {
             expect(this.clickEventStub).not.toBeDefined();
         });
         it('filters are applied to the image', function () {
             expect(this.multi).not.toBeDefined();
         });
         it('Graphs are plotted and dataset is generated', function () {
             expect(this.single).not.toBeDefined();
         });
     });
     });
}());
