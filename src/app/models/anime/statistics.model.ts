export class Score {
  score: number;
  votes: number;
  percentage: number;

  constructor(score = { score: 0, votes: 0, percentage: 0 }) {
    this.score = score.score;
    this.votes = score.votes;
    this.percentage = score.percentage;
  }
}

export class Statistic {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Score[];

  constructor(
    statistic = {
      watching: 0,
      completed: 0,
      on_hold: 0,
      dropped: 0,
      plan_to_watch: 0,
      total: 0,
      scores: [],
    }
  ) {
    this.watching = statistic.watching;
    this.completed = statistic.completed;
    this.on_hold = statistic.on_hold;
    this.dropped = statistic.dropped;
    this.plan_to_watch = statistic.plan_to_watch;
    this.total = statistic.total;
    this.scores = statistic.scores.map((score: Score) => new Score(score));
  }
}