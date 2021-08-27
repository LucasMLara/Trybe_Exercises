const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const readFile = require('../examples2/io-test/leArquivo');

const CONTENT = 'VQV TDD !';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    before(() => {
      sinon.stub(fs, 'readFileSync').returns(CONTENT);
    });

    after(() => {
      fs.readFileSync.restore();
    });

    describe('a resposta', () => {
      it('é uma "string"', () => {
        const resposta = readFile('arquivo.txt');
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        const resposta = readFile('arquivo.txt');
        expect(resposta).to.be.equals(CONTENT);
      });
    });
  });

  describe('Se o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });
    describe('a resposta deve ser', () => {
      it('retornada "Null"', () => {
        const respostaNula = readFile('./d/f');
        expect(respostaNula).to.be.equal(null);
      });
    });
  });
});
