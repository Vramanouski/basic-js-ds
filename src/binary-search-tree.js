const { NotImplementedError } = require('../extensions/index.js');
class BinarySearchTree {

  constructor () {
    this.list = null;
  }

  root() {
    return this.list;
  }

  add(data) {
  	if (this.list == null) {
        this.list = {};
        this.list.data = data;
      }
  
    const f = (obj) => {
      
      if (obj.data == null) {
        obj.data = data;
      } else if (data < obj.data) {
        if (obj.left) {
          f(obj.left);
        } else {
          obj.left = {};
          obj.left.data = data;
        }
      } else if (data > obj.data) {
        if (obj.right) {
          f(obj.right);
        } else {
          obj.right = {};
          obj.right.data = data;
        }
      } else return;
    }
    f(this.list);
  }
    

  has(data) {
    console.log(data)
    let tmp = this.list;
    while (tmp) {
      if (tmp.data == data) {
        return true
      } else {
        if (data < tmp.data) {
          tmp = tmp.left;
        } else tmp = tmp.right;
      }
    }
    return false;
  }

  find(data) {
    let tmp = this.list;
    while (tmp) {
      if (tmp.data == data) {
        return tmp;
      } else {
        if (data < tmp.data) {
          tmp = tmp.left;
        } else tmp = tmp.right;
      }
    }
    return null;
  }

  remove(data) {
    let tmp = this.list;

    if (tmp.data == data) {          
      if (tmp.left && tmp.right) {
        let lastRightLeft = tmp.right;
        if (lastRightLeft.left) {
        while(lastRightLeft.left && lastRightLeft.left.left) {
          lastRightLeft = lastRightLeft.left;
        }
        this.list.data = lastRightLeft.left.data;
        lastRightLeft.left.left = null;
      } else {
        this.list.data = lastRightLeft.data;
        tmp.right = null;
      }
      } else if (tmp.left) {
        this.list = this.list.left;
      } else if (tmp.right) {
        this.list = this.list.right;
      } else {
        this.list = null;
      }
      return
    }

    



    


    if (parent==null) return;   
    let del;
    parent.left && parent.left.data == data ? del = parent.left : del = parent.right;

    

    if (del.left==null && del.right==null) {                         
      parent.left && parent.left.data == data ? parent.left = null : parent.right = null;
    } else if (del.left==null || del.right==null) {                
      let child;
      del.left ? child = del.left : child = del.right;
      parent.left && parent.left.data == data ? parent.left = child : parent.right = child;
    } else {                                                          
      let lastRightLeft = del.right;
      if (lastRightLeft.left) {
        while(lastRightLeft.left && lastRightLeft.left.left) {
          lastRightLeft = lastRightLeft.left;
        }
        del.data = lastRightLeft.left.data;
        if (lastRightLeft.left.right) {
          lastRightLeft.left = lastRightLeft.left.right
        }  else lastRightLeft.left = null;
      } else {
        del.data = lastRightLeft.data;
        del.right = null;
      } 
    }                         
  }  
    


  

  min() {
    let tmp = this.list;
    let min = Infinity;
    while (tmp && tmp.data) {
      if (tmp.data < min) {
        min = tmp.data;
      } else tmp = tmp.left;
    }
   if (min == Infinity) {
    return null
   } else return min;
  }
    
  

  max() {
    let tmp = this.list;
    let max = -Infinity;

    while (tmp && tmp.data) {
      if (tmp.data > max) {
        max = tmp.data;
      } else tmp = tmp.right;
    }
   if ( max == -Infinity) return null;
   return max;
  }

}

module.exports = {
  BinarySearchTree
};