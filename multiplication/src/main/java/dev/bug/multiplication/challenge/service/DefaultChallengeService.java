package dev.bug.multiplication.challenge.service;

import dev.bug.multiplication.challenge.model.ChallengeAttempt;
import dev.bug.multiplication.challenge.model.ChallengeAttemptDto;
import dev.bug.multiplication.user.User;
import org.springframework.stereotype.Service;

@Service
public class DefaultChallengeService implements ChallengeService {

    @Override
    public ChallengeAttempt verifyAttempt(ChallengeAttemptDto resultAttempt) {
        boolean isCorrect = resultAttempt.getGuess() == resultAttempt.getFactorA() * resultAttempt.getFactorB();
        User user = new User(null, resultAttempt.getUserAlias());
        return new ChallengeAttempt(null,
                user.getId(),
                resultAttempt.getFactorA(),
                resultAttempt.getFactorB(),
                resultAttempt.getGuess(),
                isCorrect
        );
    }
}
