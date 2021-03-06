describe("Frame", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Can create a frame class", function() {
    let gutterFrame = new Frame(0, 0);
    expect(gutterFrame instanceof Frame).toBe(true);
  });

  it("Can add up two rolls in a frame", function() {
    let frame = new Frame(1, 3);
    expect(frame.addScore()).toEqual(4);
  })

  it("Can return just roll1", function() {
    let frame = new Frame(1, 6);
    expect(frame.getRoll1()).toEqual(1)
  })

  it("Knows if frame is a spare", function() {
    let frame = new Frame(3, 7);
    expect(frame.isASpare()).toEqual(true)
  })

  it("knows a spare from a strike", function() {
    let frame = new Frame(10, 0);
    expect(frame.isASpare()).toEqual(false)
  })

  it("Knows if frame is a strike", function() {
    let frame = new Frame(10, 0);
    expect(frame.isAStrike()).toEqual(true)
  })

  it("Knows if this is a bonus round", function() {
    let frame = new Frame(10, 10, 10);
    expect(frame.isABonus()).toEqual(true)
  })

  it("Calculates bonus score", function() {
    let frame = new Frame(10, 10, 10);
    expect(frame.calcBonus()).toEqual(30)
  })

  it("Takes a default argument in roll 2 to account for strikes", function() {
    let frame = new Frame(10);
    expect(frame.addScore()).toEqual(10)
  })

})