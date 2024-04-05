

Array.prototype.deleteByIndex = function(index) {
    // Validation
    if (index < 0 || index >= this.length) {
        throw new Error('Index out of bounds');
    }

    // Value to removed
    const value = this[index];

    // Rest of the cases
    for (let i = index; i < this.length - 1; i++) {
        this[i] = this[i + 1];
    }

    // Remove last element
    this.length -= 1;

    return value;
}