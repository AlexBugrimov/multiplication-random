package dev.bug.multiplication.challenge;

import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class DefaultChallengeGeneratorService implements ChallengeGeneratorService {

    private static final int MINIMUM_FACTOR = 11;
    private static final int MAXIMUM_FACTOR = 100;

    private final Random random;

    DefaultChallengeGeneratorService() {
        this(new Random());
    }

    protected DefaultChallengeGeneratorService(final Random random) {
        this.random = random;
    }

    @Override
    public Challenge randomChallenge() {
        return new Challenge(next(), next());
    }

    private int next() {
        return random.nextInt(MAXIMUM_FACTOR - MINIMUM_FACTOR) + MINIMUM_FACTOR;
    }
}
