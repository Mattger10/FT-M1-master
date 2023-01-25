"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) return null;
  if (this.left === null && this.right === null) return 1;
  if (this.left !== null && this.right === null) return 1 + this.left.size();
  if (this.left === null && this.right !== null) return 1 + this.right.size();
  if (this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (callback, order) {
  if (order === "post-order") {
    if (this.left) this.left.depthFirstForEach(callback, order);
    if (this.right) this.right.depthFirstForEach(callback, order);
    callback(this.value);
  } else if (order === "pre-order") {
    callback(this.value);
    if (this.left) this.left.depthFirstForEach(callback, order);
    if (this.right) this.right.depthFirstForEach(callback, order);
  } else {
    if (this.left) this.left.depthFirstForEach(callback, order);
    callback(this.value);
    if (this.right) this.right.depthFirstForEach(callback, order);
  }

  BinarySearchTree.prototype.breadthFirstForEach = function (callback, array = []){
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);
    callback(this.value);
    if (array.length > 0) {
      let element = array.shift();
      element.breadthFirstForEach(callback, array);
    }
  };
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
