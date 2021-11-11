package dev.bug.multiplication.challenge;

import dev.bug.multiplication.challenge.model.ChallengeAttempt;
import dev.bug.multiplication.challenge.model.ChallengeAttemptDto;
import dev.bug.multiplication.challenge.service.ChallengeService;
import dev.bug.multiplication.challenge.service.DefaultChallengeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.BDDAssertions.then;

class ChallengeServiceTest {

    private ChallengeService challengeService;

    @BeforeEach
    void setUp() {
        challengeService = new DefaultChallengeService();
    }

    @Test
    void checkCorrectAttemptTest() {
        ChallengeAttemptDto attempt = new ChallengeAttemptDto(50, 60, "john_doe", 3000);

        ChallengeAttempt resultAttempt = challengeService.verifyAttempt(attempt);

        then(resultAttempt.isCorrect()).isTrue();
    }

    @Test
    void checkWrongAttemptTest() {
        ChallengeAttemptDto attempt = new ChallengeAttemptDto(50, 60, "john_doe", 5000);

        ChallengeAttempt resultAttempt = challengeService.verifyAttempt(attempt);

        then(resultAttempt.isCorrect()).isFalse();
    }
}