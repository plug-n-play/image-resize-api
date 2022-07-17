import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Image API', () => {

  describe('Test status codes', () => {
		it('returns 200 response code', (done) => {
			request
				.get('/api/images?filename="fjord"')
				.expect(404);
			done();
		});
		it('returns 404 response code', (done) => {
			request
			.get('/api/')
			.expect(404);
			done();
    });
  });

	describe('Test valid responses', () => {
		it('returns an image when both width & height are provided', (done) => {
			request
			.get('/api/images?filename="fjord"&width=500&height=300')
			.expect('Content-Type', 'image/jpg');
			done();
		});
		it('returns an image when only width is provided', (done) => {
			request
			.get('/api/images?filename="fjord"&width=500')
			.expect('Content-Type', 'image/jpg');
			done();
		});
		it('returns an image when only height is provided', (done) => {
			request
			.get('/api/images?filename="fjord"&height=500')
			.expect('Content-Type', 'image/jpg');
			done();
		});
  });

	describe('Test error responses', () => {
		it('returns error when filename is not provided', (done) => {
			request
			.get('/api/images')
			.expect('body', 'Missing required param "filename"');
			done();
		});
		it('returns a 404 when invalid filename is provided', (done) => {
			request
			.get('/api/images?filename=abc')
			.expect(404);
			done();
		});
  });

});
