package dev.bug.multiplication.challenge.service;

import dev.bug.multiplication.challenge.model.ChallengeAttempt;
import dev.bug.multiplication.challenge.model.ChallengeAttemptDto;

public interface ChallengeService {

    ChallengeAttempt verifyAttempt(ChallengeAttemptDto resultAttempt);
}
